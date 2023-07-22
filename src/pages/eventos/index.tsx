const Root = () => {
  return <></>
}

export default Root

export const getServerSideProps = () => {
  return {
    redirect: {
      destination: '/',
      permanent: false
    }
  }
}
