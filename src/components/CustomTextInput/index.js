import {View, StyleSheet, Text} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import {Controller} from 'react-hook-form';

const CustomTextInput = ({
  defaultValue,
  secureTextEntry,
  keyboardType,
  control,
  label,
  name,
  rules = {},
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <View style={{borderColor: error ? 'red' : 'white'}}>
            <TextInput
              mode="outlined"
              outlineColor="#B42B3F"
              activeOutlineColor="#B42B3F"
              value={value}
              label={label}
              keyboardType={keyboardType}
              defaultValue={defaultValue}
              secureTextEntry={secureTextEntry}
              onChangeText={onChange}
              onBlur={onBlur}
              style={styles.textInput}
            />
          </View>
          {error && (
            <Text
              style={{
                color: '#B42B3F',
                alignSelf: 'stretch',
                marginHorizontal: 12,
              }}>
              {error.message || 'Error'}
            </Text>
          )}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 45,
    marginVertical: 5,
    marginHorizontal: 10,
  },
});

export default CustomTextInput;
