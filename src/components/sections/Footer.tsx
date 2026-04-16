export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 text-center text-gray-500 text-sm bg-brand-purple">
      <div className="max-w-6xl mx-auto space-y-4">
        <p>© 2026 Resgate Capilar 30D - Todos os direitos reservados.</p>
        <div className="flex justify-center gap-6">
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Contato</a>
        </div>
        <p className="max-w-2xl mx-auto opacity-50">
          Este produto não substitui uma consulta médica presencial. Sempre consulte um médico especialista para diagnósticos capilares.
        </p>
      </div>
    </footer>
  );
};
