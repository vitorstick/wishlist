import styles from './app.module.scss';
import { Header } from '@wishlist/ui';
import { Wishlist } from '@wishlist/wishlist';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';

export function App() {
  return (
    <div className={styles.app}>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <Header></Header>
        <Wishlist></Wishlist>
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
