import React from 'react';
import {View, Text, TouchableOpacity, TextInput,onChangeText} from 'react-native';

export default function InputField({
  label,
  icon,
  text,
  inputType,
  value,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25,
      }}>
      {icon}
      {inputType == 'password' ? (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          style={{flex: 1, paddingVertical: 0}}
          secureTextEntry={true}
          onChangeText={text}
         // value={text}
        />
      ) : (
        <TextInput
          placeholder={label}
          value={text}
          keyboardType={keyboardType}
          style={{flex: 1, paddingVertical: 0}}
        //  onChangeText={onChangeText}
        />
      )}
      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style={{color: '#AD40AF', fontWeight: '700'}}>{fieldButtonLabel}</Text>
      </TouchableOpacity>
    </View>
  );
}
