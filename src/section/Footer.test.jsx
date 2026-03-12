import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Footer from './Footer';
import { socialImgs } from '../constant';

describe('Footer', () => {
  it('renders social links with expected targets', () => {
    render(<Footer />);

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(socialImgs.length);

    socialImgs.forEach((social) => {
      const link = screen.getByRole('link', {
        name: `Open ${social.name} profile`,
      });
      expect(link).toHaveAttribute('href', social.link);
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('shows the current year in copyright text', () => {
    render(<Footer />);
    const year = new Date().getFullYear();

    expect(
      screen.getByText(`© ${year} Esrom Basazinaw. All rights reserved.`),
    ).toBeInTheDocument();
  });
});
