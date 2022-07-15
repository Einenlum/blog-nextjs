import Header from './header';

export default function Layout({ children }) {
  return (
    <>
      <div className="sm:mx-auto mx-3 sm:max-w-xl md:max-w-2xl 2xl:max-w-3xl mb-10 md:mb-16 lg:mb-40">
        <Header />
        {children}
      </div>
    </>
  );
}
