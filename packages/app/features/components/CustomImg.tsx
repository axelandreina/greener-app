import { Image, Platform, View } from 'react-native'
import { default as WebImage } from 'next/image'

export default function CustomImg(props: {
  src: any
  style?: {}
  alt?: any
  layout?: any
  external?: boolean
}) {
  const { src, style, alt, layout, external } = props

  if (Platform.OS === 'web') {
    return (
      <View style={style}>
        <WebImage src={src} alt={alt} layout={layout} />
      </View>
    )
  } else {
    if (external) {
      // eslint-disable-next-line jsx-a11y/alt-text
      return <Image source={{ uri: src }} style={style} />
    } else {
      // eslint-disable-next-line jsx-a11y/alt-text
      return <Image source={src} style={style} />
    }
  }
}
