interface TextBoxProps {
  name?: string;
  value?: string;
  className?: string;
}

export default function TextBox({ name = '', value = '', className = '' }: TextBoxProps) {
  return (
    <div className={`relative border-b-blue-300/50 border-b flex gap-5 flex-row mb-3 ${className}`}>
      <h5 className="w-1/2 pb-3 font-medium">{name}</h5>
      <h5 className="w-1/2 font-semibold">{value}</h5>
    </div>
  );
}
