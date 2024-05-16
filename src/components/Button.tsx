export default function Button({
  href,
  className,
  Uppertext,
  Lowertext,
  logo,
  alt,
}: {
  href: string;
  className: string;
  Uppertext: string;
  Lowertext: string;
  logo: string;
  alt: string;
}) {
  return (
    <a href={href} className={className} target="_blank">
      <img src={logo} alt={alt} className="w-5" />
      <div>
        <p className="text-xs">{Uppertext}</p>
        <p>{Lowertext}</p>
      </div>
    </a>
  );
}
