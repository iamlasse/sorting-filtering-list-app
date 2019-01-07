import React, { createContext, Suspense } from 'react';
import { ThemeProvider } from "styled-components";
import { AuthWrapper } from './components/AuthWrapper';
import { ErrorBoundary } from './components/ErrorBoundary';
import { contextConsumerWrapper, contextProviderWrapper } from "./components/contextWrapper";
import { Loader } from "semantic-ui-react";
import Section from './components/TestComponent';

const FilterableProductTable = React.lazy(() => import('./components/products/FilterableProductTable'));
const initialContext = { foo: 'bar', theme: 'light' }
const Context = createContext(initialContext)

const FilteredProductsWithContext = contextConsumerWrapper(FilterableProductTable, Context);
const FilteredProductsWithContextProvider = contextProviderWrapper(FilteredProductsWithContext, Context, initialContext);

const App = () => (
  <Suspense fallback={<div><Loader size="large" active /></div>}>
    <AuthWrapper>
      <ThemeProvider theme={{ mode: 'light' }}>
        <ErrorBoundary>
          <Section header='Product Listing'>
            <FilteredProductsWithContextProvider />
          </Section>
        </ErrorBoundary>
      </ThemeProvider>
    </AuthWrapper>
  </Suspense>
)
export default App