import React, { createContext, Suspense } from 'react';
import { ThemeProvider } from "styled-components";
import { AuthWrapper } from './AuthWrapper';
import { ErrorBoundary } from './ErrorBoundary';
import { contextConsumerWrapper, contextProviderWrapper } from "./contextWrapper";
import { Loader } from "semantic-ui-react";

const FilterableProductTable = React.lazy(() => import('./FilterableProductTable'));
const initialContext = { foo: 'bar', theme: 'light' }
const Context = createContext(initialContext)

const FilteredProductsWithContext = contextConsumerWrapper(FilterableProductTable, Context);
const FilteredProductsWithContextProvider = contextProviderWrapper(FilteredProductsWithContext, Context, initialContext);

const App = () => (
  <Suspense fallback={<div><Loader size="large" active /></div>}>
    <AuthWrapper>
      <ThemeProvider theme={{ mode: 'light' }}>
        <ErrorBoundary>
          <FilteredProductsWithContextProvider />
        </ErrorBoundary>
      </ThemeProvider>
    </AuthWrapper>
  </Suspense>
)
export default App