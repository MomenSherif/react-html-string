import React, { useMemo } from 'react';
import parse, { HTMLReactParserOptions, domToReact } from 'html-react-parser';

export type Components = {
  [Property in keyof React.ReactHTML]?: React.ComponentType<
    React.ComponentProps<Property>
  >;
};

export type HTMLStringProps = {
  html: string;
  components?: Components;
};

export default function HTMLString({
  html = '',
  components = {},
}: HTMLStringProps) {
  const parserOptions: HTMLReactParserOptions = useMemo(
    () => ({
      // @ts-ignore
      replace: ({ name, attribs, children: childNodes }) => {
        // @ts-ignore
        const Component = components[name];

        if (!Component) return null;

        const children = childNodes?.length
          ? domToReact(childNodes, parserOptions)
          : null;

        return React.createElement(Component, { name, ...attribs }, children);
      },
    }),
    [components],
  );

  const content = useMemo(
    () => parse(html, parserOptions),
    [html, parserOptions],
  );

  return content;
}
