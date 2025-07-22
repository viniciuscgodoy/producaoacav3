import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import useProductionData from '@/hooks/useProductionData';
import Header from '@/components/layout/Header';
import FileUpload from '@/components/FileUpload';
import Filters from '@/components/Filters';
import Statistics from '@/components/Statistics';
import MaxProductionHighlight from '@/components/MaxProductionHighlight';
import DataTable from '@/components/DataTable';

function App() {
  const {
    data,
    filteredData,
    filters,
    setFilters,
    isLoading,
    handleFileUpload,
    uniqueValues,
    stats,
    maxProductionData,
    maxProductionByProduct,
  } = useProductionData();

  return (
    <div className="min-h-screen bg-companyBlue p-4">
      <Helmet>
        <title>Sistema de Análise de Produção</title>
        <meta name="description" content="Sistema avançado para análise de dados de produção industrial com filtros inteligentes" />
      </Helmet>

      <div className="max-w-7xl mx-auto space-y-6">
        <Header />
        <FileUpload onFileUpload={handleFileUpload} isLoading={isLoading} />

        {data.length > 0 && (
          <>
            <Filters
              filters={filters}
              setFilters={setFilters}
              uniqueValues={uniqueValues}
            />
            <Statistics stats={stats} />
            <MaxProductionHighlight maxProductionData={maxProductionData} />
            <DataTable 
              filteredData={filteredData} 
              maxProductionByProduct={maxProductionByProduct}
              isMachineFilterActive={!!filters.machine}
            />
          </>
        )}
      </div>

      <Toaster />
    </div>
  );
}

export default App;