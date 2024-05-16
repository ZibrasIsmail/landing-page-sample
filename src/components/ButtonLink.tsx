export default function ButtonLink({
  children,
  href,
  className,
  target,
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
  target?: string;
}) {
  return (
    <a href={href} className={className} target={target}>
      {children}
    </a>
  );
}
