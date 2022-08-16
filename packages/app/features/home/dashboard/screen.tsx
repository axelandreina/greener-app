import React, { useState, useEffect } from 'react'
import { Text, View, H1} from 'dripsy'
import { MotiLink } from 'solito/moti'
import CustomImg from '../../components/CustomImg'
import { moneyFormatter } from '../../../utils/utils'
import axios from 'axios'
import { ScrollView } from 'react-native'

export default function Dashboard(_props: any) {
  const [coins, setCoins] = useState([])

  const getAllCoins = async () => {
    const coinsFromAPI = await axios.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
    )
    setCoins(coinsFromAPI.data)
  }

  useEffect(() => {
    getAllCoins()
  }, [])

  return (
    <View
      sx={{
        backgroundColor: '#17142a',
        padding: '3',
        paddingBottom: 120,
      }}
    >
      <H1
        sx={{
          fontWeight: '600',
          color: 'white',
          fontSize: 30,
          marginBottom: 24,
        }}
      >
        Dashboard
      </H1>
      <ScrollView>
        {coins.map((coin: any, i: number) => (
          <MotiLink
            key={i}
            href={`/coin/${coin.id}`}
            animate={({ hovered, pressed }) => {
              'worklet'

              return {
                scale: pressed ? 0.95 : hovered ? 1.1 : 1,
                rotateZ: pressed ? '0deg' : hovered ? '0deg' : '0deg',
              }
            }}
            transition={{
              type: 'timing',
              duration: 150,
            }}
          >
            <View
              sx={{
                backgroundColor: '#201e33',
                padding: 3,
                borderRadius: 8,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 10,
              }}
            >
              <View sx={{ flexDirection: 'row', alignItems: 'center' }}>
                <View sx={{ marginLeft: 1 }}>
                  <CustomImg
                    src={coin.image}
                    layout="fill"
                    style={{ width: 20, height: 20 }}
                    alt={`Logo from ${coin.name}`}
                    external={true}
                  ></CustomImg>
                </View>
                <Text
                  sx={{
                    color: 'white',
                    marginLeft: 2,
                    fontWeight: 'bold',
                    fontSize: 2,
                  }}
                >
                  {coin.name}
                </Text>
                <View
                  sx={{
                    marginLeft: 2,
                    backgroundColor: '#363346',
                    padding: 1,
                    borderRadius: 10,
                  }}
                >
                  <Text
                    sx={{
                      color: 'white',
                      fontSize: 1,
                      fontWeight: '200',
                      textTransform: 'uppercase',
                    }}
                  >
                    {coin.symbol}
                  </Text>
                </View>
              </View>

              <View
                sx={{
                  marginLeft: 1,
                  padding: 1,
                  borderRadius: 10,
                }}
              >
                <Text sx={{ color: 'white', fontSize: 2 }}>
                  USD {moneyFormatter.format(coin.current_price)}
                </Text>
              </View>
            </View>
          </MotiLink>
        ))}
      </ScrollView>
    </View>
  )
}