import { Link } from 'expo-router';
import { useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

import OAuth from '@/components/OAuth';
import CustomButton from '@/components/customButton';
import InputField from '@/components/inputField';
import { icons, images } from '@/constants';

const LogIn = () => {
  const [form, setForm] = useState({  email: '', password: '' });
  const onLogInPress = async () => {};
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative h-[250px] w-full">
          <Image source={images.signUpCar} className="z-0 h-[250px] w-full" />
          <Text className="font-JakartaSemiBold absolute bottom-5 left-5 text-2xl text-black">
            Welcome 👋
          </Text>
        </View>
        <View className="p-5 ">
         
          <InputField
            label="Email"
            placeholder="Enter your email"
            icon={icons.email}
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <InputField
            label="Password"
            placeholder="Enter your password"
            icon={icons.lock}
            value={form.password}
            secureTextEntry
            onChangeText={(value) => setForm({ ...form, password: value })}
          />
          <CustomButton className="mt-6" title="LogIn" onPress={onLogInPress} />
          {/* TODO: OAuth buttons */}
          <OAuth />
          <Link href="/sign-up" className="text-general-200 mt-10 text-center text-lg">
            <Text>Don't have an account?</Text>
            <Text className="text-primary-500">Sign Up</Text>
          </Link>
        </View>

      </View>
    </ScrollView>
  );
};

export default LogIn;
