// src/utils/resolvePath.ts

// 判断外链
export function isExternal(p: string) {
  return /^(https?:|mailto:|tel:)/.test(p);
}

// 拼接路径
export function resolvePath(base: string, child: string) {
  if (!child) return base || "/";
  if (isExternal(child)) return child;
  if (child.startsWith("/")) return child;

  // 保证 base 有头部斜杠，去掉末尾斜杠
  const b = base.endsWith("/") ? base.slice(0, -1) : base;
  return `${b}/${child}`;
}
