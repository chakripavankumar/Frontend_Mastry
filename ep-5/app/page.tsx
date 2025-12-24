export default function Home() {
  return (
    <div className="relative h-full w-full">
  <div className="h-40 w-40 bg-red-500"></div>
  <div
    className="absolute inset-0 z-0 m-auto rounded-lg
    bg-[image:repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_1px,transparent_50%)]
    bg-[size:10px_10px]"
  />
</div>

  );
}
