import { Link } from 'expo-router';
import { useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

import OAuth from '@/components/OAuth';
import CustomButton from '@/components/customButton';
import InputField from '@/components/inputField';
import { icons, images } from '@/constants';

const SignUp = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const onSignUpPress = async () => {};
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative h-[250px] w-full">
          <Image source={images.signUpCar} className="z-0 h-[250px] w-full" />
          <Text className="font-JakartaSemiBold absolute bottom-5 left-5 text-2xl text-black">
            Create Your Account
          </Text>
        </View>
        <View className="p-5 ">
          <InputField
            label="Name"
            placeholder="Enter your name"
            icon={icons.person}
            value={form.name}
            onChangeText={(value) => setForm({ ...form, name: value })}
          />
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
          <CustomButton className="mt-6" title="SignUp" onPress={onSignUpPress} />
          {/* TODO: OAuth buttons */}
          <OAuth />
          <Link href="/sign-in" className="text-general-200 mt-10 text-center text-lg">
            <Text>already have an account?</Text>
            <Text className="text-primary-500">Log In</Text>
          </Link>
        </View>
        {/* TODO: verification modal */}
      </View>
    </ScrollView>
  );
};

export default SignUp;
