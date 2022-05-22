import { StyleSheet, TextInput } from 'react-native';
import { Button } from 'native-base';
import { Text, View,  } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { 
    LOGIN
} from '../app-redux/constant/actions';
import { useForm } from 'react-hook-form';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const dispatch = useDispatch(); 
  const { setValue, watch, handleSubmit } = useForm(); 
  const watchFields = watch();

  const handleLogin = (data: any) => {
    dispatch({
      type: LOGIN, 
      payload: {
        username: data?.username,
        password: data?.password,
      },
      callback: (err: any, data: any) => {
        if (err) {
          console.error(err);
          return; 
        }
        console.log(data);
      }
    });
  };

  return (
    <View style={styles.container}>
      <TextInput value={watchFields?.username} onChange={(e: any) => setValue('username', e?.target?.value)}>

      </TextInput>
      <TextInput value={watchFields?.password} onChange={(e: any) => setValue('password', e?.target?.value)}>
        
      </TextInput>
      <Button onClick={handleSubmit((data) => handleLogin(data))}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
