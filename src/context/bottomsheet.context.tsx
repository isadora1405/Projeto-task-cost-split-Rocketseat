import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import { BackHandler } from "react-native";
import { colors } from "@/styles";

interface BottomSheetContextType {
  openBottomSheet: (content: React.ReactNode, index: number) => void;
  closeBottomSheet: () => void;
  isBottomSheetOpen: boolean;
}

export const BottomSheetContext = createContext({} as BottomSheetContextType);

export const BottomSheetProvider: FC<PropsWithChildren> = ({ children }) => {
  const [content, setContent] = useState<React.ReactNode | null>(null);
  const [index, setIndex] = useState(-1);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const isBottomSheetOpen = index !== -1;
  const snapPoints = ["55%", "90%"];

  const openBottomSheet = useCallback(
    (newContent: React.ReactNode, snapIndex: number) => {
      setContent(newContent);
      setIndex(snapIndex);
      requestAnimationFrame(() => {
        bottomSheetRef.current?.snapToIndex(snapIndex);
      });
    },
    [],
  );

  const closeBottomSheet = useCallback(() => {
    requestAnimationFrame(() => {
      bottomSheetRef.current?.close();
    });
  }, []);

  useEffect(() => {
    const onBackPress = () => {
      if (isBottomSheetOpen) {
        closeBottomSheet();
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      onBackPress,
    );

    return () => backHandler.remove();
  }, [isBottomSheetOpen, closeBottomSheet]);

  const handleSheetChanges = useCallback((newIndex: number) => {
    if (newIndex === -1) {
      requestAnimationFrame(() => {
        setIndex(-1);
        setContent(null);
      });
    }
  }, []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        pressBehavior="close"
        opacity={0.3}
      />
    ),
    [],
  );

  return (
    <BottomSheetContext.Provider
      value={{
        openBottomSheet,
        closeBottomSheet,
        isBottomSheetOpen,
      }}
    >
      {children}

      {isBottomSheetOpen && (
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          index={index}
          enablePanDownToClose
          onChange={handleSheetChanges}
          backdropComponent={renderBackdrop}
          backgroundStyle={{
            backgroundColor: colors.gray700,
            borderTopLeftRadius: 32,
            borderTopRightRadius: 32,
          }}
        >
          <BottomSheetScrollView>{content}</BottomSheetScrollView>
        </BottomSheet>
      )}
    </BottomSheetContext.Provider>
  );
};

export const useBottomSheetContext = () => {
  return useContext(BottomSheetContext);
};
