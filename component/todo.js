import { View, Text, TextInput, Keyboard } from "react-native";
import React, { useState } from "react";
import {
  Box,
  Center,
  Checkbox,
  Heading,
  HStack,
  Icon,
  IconButton,
  Input,
  NativeBaseProvider,
  ScrollView,
  VStack,
  KeyboardAvoidingView,
} from "native-base";
import { Feather, Entypo } from "@expo/vector-icons";

const ToDong = () => {
  const gonnaDo = [
    {
      id: 1,
      title: "Pray",
      done: true,
    },
    {
      id: 2,
      title: "take a bath",
      done: false,
    },
    {
      id: 3,
      title: "eat",
      done: false,
    },
    {
      id: 4,
      title: "ngoding",
      done: false,
    },
    {
      id: 5,
      title: "ngoding",
      done: false,
    },
    {
      id: 6,
      title: "ngoding",
      done: false,
    },
    {
      id: 7,
      title: "ngoding",
      done: false,
    },
    {
      id: 8,
      title: "ngoding",
      done: false,
    },
  ];
  const [list, setList] = React.useState(gonnaDo);
  const [taskList, setTaskList] = React.useState("");

  const handleAdd = (title) => {
    setList([...list, { title: title, done: false }]);
  };

  const handleDelete = (index) => {
    const temp = list.filter((_, itemI) => itemI !== index);
    setList(temp);
  };

  return (
    <Box bg="#50BAFE" width="sm" height="100%" flex={1}>
      <Box space="5" borderBottomLeftRadius="10">
        <VStack
          marginTop="5"
          space={5}
          justifyContent="flex-start"
          width="xs"
          marginLeft="5"
        >
          {/* <Heading>Your's Schedules</Heading> */}

          <VStack space={5}>
            {list.map((item, itemI) => (
              <ScrollView>
                <HStack
                  space={5}
                  justifyContent="space-between"
                  // key={item.title + itemI.toString()}

                  bg="#C2CCAE"
                  borderBottomRightRadius="10"
                >
                  <Checkbox>
                    <Text
                      fontSize="xl"
                      adjustsFontSizeToFit
                      textAlign="justify"
                    >
                      {item.title}
                    </Text>
                  </Checkbox>
                  <IconButton
                    justifyContent="flex-end"
                    icon={
                      <Icon
                        as={Entypo}
                        name="trash"
                        size="sm"
                        color="trueGray.700"
                        justifyContent="flex-end"
                      />
                    }
                    onPress={() => handleDelete(itemI)}
                  />
                </HStack>
              </ScrollView>
            ))}
          </VStack>
          <KeyboardAvoidingView>
            <View justifyContent="flex-end">
              <HStack width="2xs" space={6} display="flex">
                <Input
                  width="2xs"
                  // borderColor="black"
                  placeholder="add task"
                  onChangeText={(v) => setTaskList(v)}
                  value={taskList}
                  bg="#E7E7E7"
                />
                <IconButton
                  icon={
                    <Icon
                      as={Feather}
                      name="plus-circle"
                      size="md"
                      color="black"
                      onPress={() => {
                        handleAdd(taskList);
                        setTaskList("");
                      }}
                    />
                  }
                />
              </HStack>
            </View>
          </KeyboardAvoidingView>
        </VStack>
      </Box>
    </Box>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <ToDong />
      </Center>
    </NativeBaseProvider>
  );
};
