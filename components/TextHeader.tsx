interface TextHeaderProps {
  text?: string;
}

export default function TextHeader({ text = '' }: TextHeaderProps) {
  return <h5 className="container mb-2 font-medium tracking-widest">{text}</h5>;
}
