import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { createContext, ReactNode, useContext, useEffect } from 'react';

type SidebarDrawerProviderProps = {
  children: ReactNode;
};

type SidebarDrawerContextData = UseDisclosureReturn;

const SidebarContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({
  children,
}: SidebarDrawerProviderProps) {
  const disclouser = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclouser.onClose();
  }, [router.asPath]);

  return (
    <SidebarContext.Provider value={disclouser}>
      {children}
    </SidebarContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(SidebarContext);
