import React from 'react';
import { render, screen } from '@testing-library/react';
import HTMLString from '.';

describe('<HTMLString />', () => {
  const html = `
    <div>
      <h1>
        Hello from
        <a
          href="https://github.com/MomenSherif/react-html-string"
          target="_blank"
          >React HTML String</a
        >
      </h1>
      <hr />
      <ul>
        <li>Render HTML string safely</li>
        <li>Provide <b>Custom Components</b> if needed</li>
      </ul>
      <p>Don't forget to ⭐️ the project</p>
    </div>
`;

  it('renders react tree successfully from html string', () => {
    render(<HTMLString html={html} />);

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /hello from react html string/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /react html string/i }),
    ).toBeInTheDocument();

    expect(screen.getByRole('separator')).toBeInTheDocument();

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });

  it('renders custom react components', () => {
    render(
      <HTMLString
        html={html}
        components={{
          h1: ({ children, ...props }) => <h1 {...props}>Custom {children}</h1>,
          a: () => <a href="www.example.com">HAHA this is fake link</a>,
        }}
      />,
    );

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /Custom Hello from HAHA this is fake link/i,
      }),
    ).toBeInTheDocument();
  });
});
