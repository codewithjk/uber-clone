import { Image, Text, View } from 'react-native';
import CustomButton from './customButton';
import { icons } from '@/constants';

const OAuth = () => {
  const handleGoogleSignIn = async () => {};
  return (
    <View>
      <View className="mt-4 flex flex-row items-center justify-center gap-x-3">
        <View className="bg-general-100 h-[1px] flex-1" />
        <Text className="text-lg">Or</Text>
        <View className="bg-general-100 h-[1px] flex-1" />
      </View>
      <CustomButton
        onPress={handleGoogleSignIn}
        bgVariant="outline"
        textVariant="primary"
        title="Login with google"
        className="mt-5 w-full shadow-none"
        IconLeft={() => (
          <Image source={icons.google} resizeMode="contain" className="mx-2 h-5 w-5" />
        )}
      />
    </View>
  );
};

export default OAuth;
