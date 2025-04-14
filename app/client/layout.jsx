import HeaderClient from "../ui/components/HeaderCliente";

export default function ClientPage({ children }) {
  return (
    <div>
      <HeaderClient />
      <div className="p-20 px-80 overflow-hidden">
        {children}
        </div>
    </div>
  );
}
