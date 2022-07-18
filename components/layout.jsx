import Header from './header';

export default function Layout({ children }) {
  return (
    <>
      <div className="sm:mx-auto mx-3 sm:max-w-xl md:max-w-2xl 2xl:max-w-3xl mb-20 lg:mb-40 xl:mb-60">
        <Header />
        {children}
      </div>
    </>
  );
}
