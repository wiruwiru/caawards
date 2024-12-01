export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 py-2 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-withe">
          Coscu Army Awards | Copyright &copy; {new Date().getFullYear()} 
        </p>
      </div>
    </footer>
  )
}