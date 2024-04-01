import { ComponentProps, FC, ReactNode } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Provider = [FC<any>, ComponentProps<any>?];
type Providers = Provider[];

const combineProviders = (providers: Providers): FC =>
  providers.reduce(
    (AccumulatedProviders, [Provider, props = {}]) =>
      ({ children }) =>
        (
          <AccumulatedProviders>
            <Provider {...props}>
              <>{children}</>
            </Provider>
          </AccumulatedProviders>
        ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ({ children }: any) => <>{children}</>
  );

interface ICombineProvidersProps {
  providers: Providers;
  children?: ReactNode;
}

export const CombineProviders: FC<ICombineProvidersProps> = ({ providers }) => {
  return <>{combineProviders(providers)}</>;
};
