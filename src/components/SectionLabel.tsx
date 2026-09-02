export default function SectionLabel({
  children,
  align = "left",
}: {
  children: React.ReactNode;
  align?: "left" | "center";
}) {
  return (
    <p
      className={`text-xs font-bold uppercase tracking-[0.3em] text-orange-600 ${
        align === "center" ? "text-center" : ""
      }`}
    >
      {children}
    </p>
  );
}
