import { FutureverseAuthClient } from "@futureverse/auth-react/auth";
import { createWagmiConfig } from "@futureverse/auth-react/wagmi";
import { QueryClient } from "@tanstack/react-query";

const clientId = process.env.NEXT_PUBLIC_FUTUREVERSE_CLIENT_ID!;
const redirectUri = process.env.NEXT_PUBLIC_FUTUREVERSE_REDIRECT_URI!;
// const walletConnectProjectId = '<your-wallet-connect-project-id>';
// const xamanAPIKey = '<your-xaman-application->';

export const authClient = new FutureverseAuthClient({
  clientId,
  environment: 'staging',
  redirectUri,
  signInFlow: 'popup',
});

export const queryClient = new QueryClient();

export const getWagmiConfig = async () => {
  return createWagmiConfig({
    // walletConnectProjectId,
    // xamanAPIKey,
    authClient,
    // Optional if supporting SSR
    ssr: true,
    // Optional chains you wish to support
    // chains: [mainnet, sepolia, polygonAmoy],
    // Optional if supporting SSR
    // storage: createStorage({
    //   storage: cookieStorage,
    // }),
  });
};