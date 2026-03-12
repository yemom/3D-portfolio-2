import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import Button from './Button';

describe('Button', () => {
  const originalScrollTo = window.scrollTo;

  beforeEach(() => {
    window.scrollTo = vi.fn();
  });

  afterEach(() => {
    window.scrollTo = originalScrollTo;
    document.body.innerHTML = '';
    vi.restoreAllMocks();
  });

  it('scrolls smoothly to #counter when id is truthy', async () => {
    Object.defineProperty(window, 'innerHeight', {
      configurable: true,
      value: 1000,
    });
    Object.defineProperty(window, 'pageYOffset', {
      configurable: true,
      value: 100,
    });

    const counter = document.createElement('div');
    counter.id = 'counter';
    counter.getBoundingClientRect = vi.fn(() => ({ top: 500 }));
    document.body.appendChild(counter);

    render(<Button text="Scroll" id />);

    await userEvent.click(screen.getByText('Scroll'));

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 450,
      behavior: 'smooth',
    });
  });

  it('does not scroll when id prop is falsy', async () => {
    const counter = document.createElement('div');
    counter.id = 'counter';
    counter.getBoundingClientRect = vi.fn(() => ({ top: 500 }));
    document.body.appendChild(counter);

    render(<Button text="No Scroll" id={false} />);

    await userEvent.click(screen.getByText('No Scroll'));

    expect(window.scrollTo).not.toHaveBeenCalled();
  });
});
