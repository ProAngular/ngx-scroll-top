import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxScrollTopComponent } from './ngx-scroll-top.component';

@Component({
  selector: 'ngx-scroll-top-test-host',
  imports: [NgxScrollTopComponent],
  template: `
    <ngx-scroll-top
      [backgroundColor]="backgroundColor()"
      [displayAtYPosition]="threshold()"
      [fontColor]="fontColor()"
      [position]="position()"
      [zIndex]="zIndex()"
    >
      <span class="projected">Top</span>
    </ngx-scroll-top>
  `,
})
class TestHostComponent {
  public readonly backgroundColor = signal('red');
  public readonly fontColor = signal('white');
  public readonly position = signal<'left' | 'right'>('right');
  public readonly threshold = signal<string | number>(100);
  public readonly zIndex = signal(999);
}

function setScrollY(value: number): void {
  Object.defineProperty(window, 'scrollY', {
    configurable: true,
    value,
  });
}

describe('NgxScrollTopComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let host: TestHostComponent;

  const element = (): HTMLElement =>
    fixture.nativeElement.querySelector('ngx-scroll-top');
  const button = (): HTMLButtonElement | null =>
    fixture.nativeElement.querySelector('button');

  const scrollTo = async (value: number): Promise<void> => {
    setScrollY(value);
    window.dispatchEvent(new Event('scroll'));
    await fixture.whenStable();
    fixture.detectChanges();
  };

  beforeEach(async () => {
    setScrollY(0);
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(TestHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  afterEach(() => {
    setScrollY(0);
    vi.restoreAllMocks();
  });

  it('starts hidden', () => {
    expect(element()).toBeTruthy();
    expect(button()).toBeNull();
  });

  it('stays hidden when scrolled less than the threshold', async () => {
    await scrollTo(50);

    expect(button()).toBeNull();
  });

  it('shows after a window scroll past the threshold', async () => {
    await scrollTo(500);

    expect(button()).toBeTruthy();
    expect(button()?.getAttribute('aria-label')).toBe('Scroll to top');
  });

  it('adds the fade-in class once the button has rendered', async () => {
    await scrollTo(500);
    await new Promise((resolve) => requestAnimationFrame(resolve));
    fixture.detectChanges();

    expect(button()?.classList).toContain('fade-in');
    expect(button()?.classList).not.toContain('not-rendered');
  });

  it('scrolls to the top when the button is clicked', async () => {
    const scroll = vi.spyOn(window, 'scroll').mockImplementation(() => {
      /* Spy only, jsdom does not implement scrolling. */
    });
    await scrollTo(500);

    button()?.click();

    expect(scroll).toHaveBeenCalledExactlyOnceWith({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  });

  it('applies the position input to the host styles', async () => {
    expect(element().style.right).toBe('16px');
    expect(element().style.left).toBe('unset');

    host.position.set('left');
    fixture.detectChanges();

    expect(element().style.left).toBe('16px');
    expect(element().style.right).toBe('unset');
  });

  it('applies the theme inputs to the host and button styles', async () => {
    await scrollTo(500);

    expect(element().style.color).toBe('white');
    expect(element().style.zIndex).toBe('999');
    expect(button()?.style.backgroundColor).toBe('red');

    host.fontColor.set('black');
    host.backgroundColor.set('blue');
    host.zIndex.set(5);
    fixture.detectChanges();

    expect(element().style.color).toBe('black');
    expect(element().style.zIndex).toBe('5');
    expect(button()?.style.backgroundColor).toBe('blue');
  });

  it('renders projected content in place of the default icon', async () => {
    await scrollTo(500);

    expect(button()?.querySelector('.projected')?.textContent).toBe('Top');
    expect(button()?.querySelector('svg.default-content')).toBeNull();
  });
});
