let renderCount = 0;

export function logRender(componentName: string) {
  renderCount++;

  console.log(
    `%c[RENDER] ${componentName} -> ${renderCount}`,
    "color: red; font-weight: bold;"
  );

  // If this keeps increasing fast, it's a loop
}