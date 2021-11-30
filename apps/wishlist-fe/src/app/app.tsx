import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import styles from './app.module.scss';
import { Header } from '@wishlist/ui';
import { Wishlist } from '@wishlist/wishlist';
import { NotFound } from '@wishlist/not-found';

export function App() {
  return (
    <div className={styles.app}>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <Router>
          <Header></Header>
          <div className="border-t border-gray-200 p-8">
            <Routes>
              <Route path="/" element={<Wishlist />} />
              <Route path="/vitor" element={<Wishlist />} />
              <Route path="/:name" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </div>
      {/* <main>
        <details open>
          <summary>Add UI library</summary>
          <pre>{`# Generate UI lib
nx g @nrwl/react:lib ui
# Add a component
nx g @nrwl/react:component xyz --project ui`}</pre>
        </details>
      </main> */}
    </div>
  );
}

export default App;
