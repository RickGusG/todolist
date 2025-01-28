import { PropsWithChildren } from 'react';
import { KeyboardAvoidingView, SafeAreaView, ScrollView, View } from './styles';
import { Platform } from 'react-native';

const Container = ({children}: PropsWithChildren) => {
  const isIOS = Platform.OS === 'ios';
  return (
    <SafeAreaView>
      <KeyboardAvoidingView behavior={isIOS ? 'padding' : 'height'}>
        <ScrollView>
          <View>
            {children}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Container;
