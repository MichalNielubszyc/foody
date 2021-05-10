import Head from 'next/head'
import Image from 'next/image'
import { Button, Flex, Heading, Input } from "@chakra-ui/react"
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Foody App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex height="100vh" alignItems="center" justifyContent="center" >
        <Flex direction="column" background="gray.100" p="12" rounded="6">
          <Heading mb={6}>Check the ingredients of your meal</Heading>
          <Input placeholder="type in the meal" variant="filled" mb="3" type="text" />
          <Button colorScheme="teal">Submit</Button>
        </Flex>
      </Flex>
    </>
  )
}
