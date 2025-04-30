import HeaderClient from "../ui/components/HeaderCliente";

export default function ClientPage({ children }) {
  return (
    <div>
      <HeaderClient />
      <div className="pt-10 p-4 sm:p-20 sm:px-80 overflow-hidden ">
        {children}
        </div>
    </div>
  );
}
