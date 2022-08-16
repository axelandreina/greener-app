import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { View, Text, H1 } from 'dripsy'
import { createParam } from 'solito'
import CustomImg from '../components/CustomImg'
// import { TextLink } from 'solito/link'
import { moneyFormatter } from '../../utils/utils'
// import LoadingAnimation from '../../assets/animations/loading.gif'
import axios from 'axios'

const { useParam } = createParam<{ code: string }>()

interface Coin {
  id: string
  name: string
  image: { small: string }
  symbol: string
  market_cap: number
  market_data: {current_price: {usd: number}}
  links: {homepage: string}
}

export function CoinDetailScreen(_props: any) {
  const [code] = useParam('code')
  const [coinDetail, setCoinDetail] = useState<Coin | null>(null)

  const getCoinDetail = async () => {
    if (code) {
      const coinDetailFromAPI = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${code}`
      )
      setCoinDetail(coinDetailFromAPI.data)
    }
  }

  useEffect(() => {
    getCoinDetail()
  }, [code])

  return (
    <View sx={{ backgroundColor: '#17142a', height: '100%' }}>
      <View sx={{ padding: 2 }}>
        <Navbar isLoggedIn={true} />
      </View>

      {coinDetail ? (
        <View
          sx={{
            flex: 1,
            backgroundColor: '#17142a',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <View>
            <View
              sx={{ display: 'flex', alignItems: 'center', paddingBottom: 10 }}
            >
              <CustomImg
                src={coinDetail?.image?.small}
                layout="fill"
                style={{ width: 50, height: 50 }}
                alt={`Logo from ${coinDetail?.name}`}
                external={true}
              ></CustomImg>
            </View>
            <Text
              sx={{
                textAlign: 'left',
                fontWeight: 'bold',
                color: 'white',
                paddingLeft: 3,
                fontSize: 40,
              }}
            >
              {coinDetail?.name}
            </Text>
          </View>

          <H1
            sx={{
              textAlign: 'center',
              mb: 16,
              fontWeight: '200',
              color: 'white',
              fontSize: 18,
            }}
          >{`Symbol: ${coinDetail?.symbol.toUpperCase()}`}</H1>
          <Text sx={{ color: 'white', fontSize: 3, fontWeight: '200' }}>
            USD{' '}
            {moneyFormatter.format(coinDetail?.market_data?.current_price?.usd)}
          </Text>
          {/* <View sx={{ color: 'white', fontSize: 3, fontWeight: '200' }}>
            <TextLink href={coinDetail?.links?.homepage}>
              Official Website
            </TextLink>
          </View> */}
        </View>
      ) : (
        // <View sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        //   <CustomImg
        //     src={LoadingAnimation}
        //     layout="fill" style={{ width: 100, height: 100 }}
        //     alt={''}
        //     external={true}>
        //   </CustomImg>
        // </View> 
        null
      )}
    </View>
  )
}
