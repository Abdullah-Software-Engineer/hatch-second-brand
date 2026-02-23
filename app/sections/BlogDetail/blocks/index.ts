/**
 * Reusable content blocks for blog detail pages.
 * Use these in custom content components (contents/*.tsx) so each blog
 * can compose sections, charts, tables, and lists without duplicating layout.
 */
export { default as SectionHeading } from './SectionHeading'
export { default as BarChart } from './BarChart'
export { default as ComparisonTable } from './ComparisonTable'
export { default as BulletList } from './BulletList'
export { default as DataTable } from './DataTable'
export type { SectionHeadingProps } from './SectionHeading'
export type { DataTableProps } from './DataTable'
export type { BarChartProps, BarChartItem } from './BarChart'
export type { ComparisonTableProps } from './ComparisonTable'
export type { BulletListProps } from './BulletList'
