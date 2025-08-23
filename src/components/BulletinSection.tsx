import React from 'react';
import { FileText, Download, Calendar } from 'lucide-react';

const BulletinSection: React.FC = () => {
  const handleOldBulletins = () => {
    // Placeholder para navegar para boletins antigos
    console.log('Navegando para boletins antigos');
  };

  return (
    <section id="boletim" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <FileText className="text-green-800" size={32} />
            <h2 className="text-4xl font-bold text-green-800">
              Boletim Dominical
            </h2>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Acompanhe as últimas informações, programações e mensagens da nossa igreja
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Header do Boletim */}
            <div className="bg-green-800 text-white p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Calendar size={24} />
                  <div>
                    <h3 className="text-xl font-bold">Boletim Atual</h3>
                    <p className="text-green-200">
                      Domingo, {new Date().toLocaleDateString('pt-BR')}
                    </p>
                  </div>
                </div>
                <button className="flex items-center space-x-2 bg-green-700 hover:bg-green-600 px-4 py-2 rounded-lg transition-colors duration-200">
                  <Download size={18} />
                  <span>Baixar PDF</span>
                </button>
              </div>
            </div>

            {/* Iframe do PDF */}
            <div className="p-6">
              <div className="w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                <div className="text-center text-gray-500">
                  <FileText size={48} className="mx-auto mb-4 text-gray-400" />
                  <p className="text-lg font-medium">PDF do Boletim</p>
                  <p className="text-sm">
                    O boletim será carregado aqui via iframe
                  </p>
                  {/* 
                  Para uso real, substitua por:
                  <iframe 
                    src="caminho-para-o-pdf.pdf" 
                    className="w-full h-full rounded-lg"
                    title="Boletim Dominical"
                  />
                  */}
                </div>
              </div>
            </div>

            {/* Botão Boletins Antigos */}
            <div className="p-6 pt-0">
              <button
                onClick={handleOldBulletins}
                className="w-full bg-green-800 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-200 transform hover:scale-[1.02]"
              >
                Ver Boletins Antigos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BulletinSection;