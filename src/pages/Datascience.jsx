import React from 'react'
import Navigation from '../Components/Navigation'

const Datascience = () => {

  const cardData = [
    {
      id:2,
      img:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQBDgMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAEBQMGAAECB//EAEIQAAIBAwMBBgMGAgYJBQAAAAECAwAEEQUSITEGEyJBUWEUcYEjMkKRobFSwQczYnLR8BUWJENTgqKy4ZKzwuLx/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAIxEAAgIDAQACAgMBAAAAAAAAAAECEQMSITETUSJBBDJhFP/aAAwDAQACEQMRAD8AqhhZI8bcilNyArEgYNXDuFVcHpikurWkbRsY8Kwr0jzU+iWK7CApKfCfKuXgeQb41Z0qBE+1AYEjzqwWDrbrnwlD5ZoejPgBp3duyxuSj1ddN04wuk0gyD6+dI3hsLsb4xsk9RTvTtc+HsXsb5N+37kg60WL6PtS1Cxis8ySBSBgD0quR3BvZ1WNhg8Amk2sTpeJnLBgeATUmkgoF2tyKCVAbseXsEtk+2dCAehHQ1HBHJctiBNxH3j5KPc+VGXl7Je6d8PMMlfuuOoqGG3IW0sixELRo7AfiYruYn/PkMetZK3QJNRVs3G8VvtEYN1OfuquQn+Lft86YWup6tA2Beq7DlrcsDt+g/lQ+mx2t5bvczX0enWUc8aSh1YvIrH+MDj5DgfKie0PZldDCXEdyJop527gRoTsj6gs/TPOPfr6gDbHdN2KlnktlxIc2HaUXACSKquOsbMMfQ/yNMo9RsLhwkhaFx+FqpCEyNGl0udx2pOv3lJ4GfUUZCWeKRGPMTgpnnbngj5f4UssaXg+PO29ZKmXzmUqYpAwH50TJI6qgEbADqapNrcvGyxwF2ZsYVRyx9KsEF7PZpjVJRvPItY8GTH9o9FFSlH6OmMvsfPMjKm1S7ewyakcII8ujq3qRSu31OOTCuvdJ/CnT86OiKMv+zzlfPr19qk0yqaC1hR03JWdzxXCsyZz4H9Ryp/wqZZyq7ZRg46+RoWPwDnh60vmhPOKZ3Fwhz0oCWZSSB1p0SkkK7mAP4T1zS+7sdkZYUffO5J7vk1XdR1G8IMW0KSOFZ1DN8lJyarAhKiFmZTtDYrqG+ZH2TDchqvx37iZhJng8g8UYkxlf2qtE0E6naW1wpG3G7z9KqE1lKlx3ajcPWrXJISMUKww24AZHWsmGmVqWwmT8FQw2dzcymOCJncdcdB8zV7gFnLZ/E36kRbyiIhw8pA558gPXnrWPYyasy2tgqRRjBEMR2ovPVm8/rzmtug6SKTc2MFpMbe+upYrgY3BYSVTIzyeCeooa4t5LYb22yRH7ssZyp/w+Rq8X3YqNboR3esObuQOcJamUEoOfEXXPPA4HINDS6LqXZ2ERzQW2oaZL4g8R2sN3nyMqfYgg0FkizPHNK6KRurgtVnv+zcF1ayX+iSMVXPeQMhVk4JwVycHAOCCQcHoeKrhtJevGKOyHWOT/Rbb6ZYEOSOlVq5uXncqoyKJ1q6Dqcnmk9lKVfPrTEkrVhqxRoCWXmoZ5FHhGQKOKNJGHZcKfOl95CSwAyKIV000dxbiOTrG3Rgam+OkYgMQR+tRRXEog+FfxR/tR1jp3ftkigYMsbaKaImTOfWmtl2euJIzPanIUcZqPTdLe7d7e3ZY5QON3ANS29xqlkrW5O1EbxFazFC4dL1Awq6qJeORuxUzJKmo2QmgaMrCo/OL/wAfrRFjfvMFMWVO3188mn8wuvg457iFZIzEFLKOQQP54pVKpdFyxcsbSFfZTWLSLSJdJ1eV5bW5xFHGFBEYbqxPsaYWdtbHSr3SLG9vjp9pLI9w6ohDKV4A8yNwPT3oWLT9JvIhhGgPqp4FEWumX2i3Hx2lzw3ACkBJM45HsRU5wttoph/kRlFfSAr3RoraKxvLCdp7N+7KyNjxNu5GPL5VFaQl7W6kkJSPvAGYDJ4Y1PLPdSzR3F9BHA6LgrAmAxzksfIEn0o7TSkcUvfoQJmDIg6j3pragkyMHHJmc4+VQPFfG2iKWCfD5GDMf6xvbPl9K3BhRkE7ickk8n50xtraGazkEqjcpOKjTTQbL4iJ9uByDS8OmmZDKeMmiY7gjpx9aBMM8cYdl3AjNaWQjrmtwysdJqUifiz86lTWlXKum5f4fKq+Z8gkGhpZz60PjTG+RouFvd2V5xFJsfp3ch/almtSfBouxs7jg+1VqSXOC2cjpzUb3c07JHK5kA3Y3HkcHzrLHXTfImTzdpDDtEC7yDkyHrjzwPIfOq/qkr6xelbWB5ZSnKwxl/q1NtG7MntHeSWpuvhIobW2klaJAWctHzjy65JP6U+1uDUOy81vb9k9PhRXiAlkFpveRgfxMOvnRlkjDiXRIwlPt0iiqVuyImLSToMNFLxJuHB2P59PutyP0qS0ZY1QhtyMNytjHHTn3zkVY/6S9FtbLWrLU7SV4p9RuI0mQEHDAqBIo8jgAH6e+azc/YpEpbcQJBu9ftGpou0mjW02mGNMpqKWVdpFBCY+dQzT+/lT0BZWPcwt2OmuCgMkM42tjlcvg4om1voNN0ImRJQWgE0ksZG8M7bVwD1AXn60jEtz/qlIsUaNAZvtmLeJMN4cD3JoqyS31PQJC0c9xIkAhktomCZaNtyktyfEvH3fw9ealKJVZ39DYatFZXthbx61dIkMcA7lomOcgE5wfPNT2+s6fbjUIpDPcx2srLM0vA2MWDY6k42Z58+aSm1u7zUtOkTQbbuZordmeQSlk8IDc94OmCOnkKjt4rS4j1Ga+s59OjuZ3Mzby6mNdzElXOVzu28E89BS6oP/AEP6HujsqXeq26sm21LRXCkffIYqMenIpCkFrLAhCr0oTs/qaSvrck0gSe9JlVAfvEuWP5ZpHBcSJCo3np606gMv5kk+IWRQ3OoyP3S5VT4nJwqfNvKrDo+lQQxyTkRzGLGWmYKoyfwoeW+Zo+30Zrc5kGLeKQxRjyBA5OPU+tWPSezk+q2i3Npd2tsu4j7XO/jjjHT6c1RtJW2cjbctYrolSKO8DrJbkFFy0sMedo9WX096V9oLeK2tFfKlGOEmQ5Vj6Z8j7Hn2q5al2fu9HsZtQOrWubZDIGjdlk49Djn615zcamdRl7w93FcSMgYRrsS6Rjg7kHG4deOOvFZNPqD+S5JEWlNDIMyDn1NM5ITERJbynB8hSlIni7yNeNrso9sGibaZwp71sDyxRMOopHCq7SFX8iOtTRlwxJJZT75pMtyHxySKeWLpJCFDjcegNEUI01XSWNY1JPmKu9mlw9vshkV0/snOP8aUaBpI1O5uIXkMEEHHHVvdj5/tTd9Ht7e3S60+/bLIzIQOu3Gc/mOKhOSui8ItKzqGwXBVxsPnxwaJi0wqfGCFHvxUNjqsps4ZJAr7n2n3pxBPbuRgFW8h1FTcpAeHFN2103HEu1V7tXA6FhWpNJs5ju2bZP4vOjhG4PMLfQVMFAXLoy+5FTc2dKgIJNFljB7p9w9KCl72GNoZY2VTxwKtcikAFG/KoHZiygjJPH9r6elMpsV4yuvIvwXcSblYDG1eW+vpXNwLdrAhGCucYMnl9R0ptc6XauctC0BbzPGTSm70e9VmNm3xAH4RTKSYjTQJe2UUNoZGJjc4wnr7j2pfcafcJAbjAMY6kHOKPa213ujC+lzSQ+aEjB+Xp9KkvbbUP9GMi2FzGi8uHI4A9/On2S/YjhaKvLLg1BHLtmVmOFGcnGccYzUpiluZo4reMySynCIvUnr/ACNR6jp99pojOoWkkAlO1N/mara8JU/TuJLmCRJNLnkgvDGoKxPhpCoxlD0kB816g+RoO517XBIDLqUrFD9+TaNp98jKmmgEFjo8k0xjdSMmNuQffHr79feqV8ZbSagLqOSWORX3BMCQ568E8fU/rWS/wztf1YZeaheX97FK1xNe3bMrLI3ixggjaPTI/SpL+4EZiildTKikuy8gksWP70BYztOX42Rt98A5Zz1yzdW/b2qSfDnaVyufSmoVcOkuY3yA3SuXOSc1Pp3wVsWE8IYHzo4W2m3Q+wuNrfwmiYH0rVUsd9tdRGazmyHXrgHGePMcA+oI4o2Oy+Czq/ZfUECIuTFK4IAHlk9fk2D6E0DcaPKviiYP6YoJIryxl72EvE/QkfiHoR0I+dK4mGkvaO3uZBc3ekQtdLHKglWZlwJB4uPLzI9Mmh9TutW1t47V7d4IIY1Kw7TGkaeTMW8vQ+flQTXVmz95Pp7JMDnEEuyNj64wdv0rm+1C61Bv9qk+zByIgTtB9Tn7x9zk0FBILdkTCGx3LZy9/O6FDNjCIPPaPP50CA6cZ3CiemcedaAHnTm8PQLoiSOSNiVIu3cjB6bcdelMNI7WaXoVglpc3F4JTISqQ26uDk8ckZpXe61ayW8kLPIAW7z7JdzxNjB8P4l+VUu/v9RtpI/h9UZYSS0Pw85MR5zwPwnPkR+dT03jqG5Rna/aLh2y7ZWl3DqGnd9qAcK8ex7VAN3TqB096rvZjSgLCee5jywS2KkjlftxmpNMOq6juuNRvrudJOCN5EbH0OMD6U7jsypSSRu6hBU7em8DkAL6U7pR1EhyQludMWe5uCvhG9ufrSK8+yzESCR6U61/UlhV4oDiRyTj0yaqrCTcXbPPnWKBkMxGMdKcadcos0bMOAwz51Xo2xRcMmD1ogZ6tp+pafHe3sE92YYLlMiQAgnPUA49POjJdR0SESCzvnkZVlCQO+/+s2EgHqfEn/U3pXmdnfyRgDIZc5KsPP29DTG3vETeUQKSCd7ckfL6Z5qLxdsosnKL4Gij0O1ZIyjd6evyrqG4wYsnneP3pDHcn/Vq2k3nc184JY5z4RW4r1jNbBh1lTkfMUNbTDdNHpOt30tm9sImC94WByM9MVFY6q8lwkE5VhJwpAwc+lLO3tx8P/o5s9Xf9hSjRLv4nV7SNT4u8yB7Y5qEYXGy8p1Oi43EscFwYWcLuAZc/rUlvie47wYKxjAOeM0h7YXHdXsGOqQszD5kY/Y0ys7O6h7O9zblRdyRlsueAzUtfiNt0KuGW+sWliAyjEjPsaCgmkUO8D7d2MnANTaHbahbd6t93JVsEGMnr70EZ4bG+ntGcK5yyBumG6GtFJugSbqxtpk8s8cneuGKtgEKBSW4vLi+smi+NEQkUqQY1Oc+9M9Bz3M+R/vP5VWjCTpnxX4aMV0E5Ojrsd2bksdXku55RLFDHtgP9o9fyH70bq4s+1fZmWaAkCGZyhHUFGIP5jn60wtLG5t+zrW1myrdyRkhnPRm8/p/KlXZrQdS0UXqXMkUkEzCRVQnhsYP50b2ldiSuEOI8l1y7hZdlrJ3sTE9armiRPe9oLe3XozNx8lJpx2u0x9D169tGVlj3d7ECOqNyP5j6UN2Hgmm7VWCwYWWR327uh8DV2JqjnT5ZLpLL8EGJyW5yBTW20u5uo3e3tZbox8ukXSP+9+fl7UrgdktlaeMQ71D7QeAD05q+dhb3TYLbWvjrm3R5Sgi71gCVI5x7cUs5OKtBhHZ9KpfaVqEFs813p01oiYDyFfAM9MgdPnSaQSRuVc4dDg4PnXq3b/UNJu+zGoQ2FzaSzvPGFSJgWZRjjjyrzC7Qm7n68yN1+dDFNyXQ5IqD4Zb31zAcpKcehphFrjEgXMasPWlezYMtwMZzUptSi7rpu4TqAR42+Q/xqhMZmTT7kAEbWPTNRS6Ur8wuDQgSIZ32skKcYkD+If3gfWujFPCveRyb4v+InT6+lF89Amn4cS2M0fVSfpUDI6nBU080sXd43dIO8J9PSjr7SLizYfFW5Xd0OOtBtINFXk0z4mXvYp/H1GD0oq00eS6uVOoQthRnv4gNx/vDow/I+9EyaO4fdBIUI8vKm2lzXKRi2Zd7MeWHkKFjaS+gi1McEax2pd0Xo0nAX12ryPqc0p17XPhiULM8zZ5Jzmj9XuEgUQxsob2PnVO1CwuXJm5kGc5oKg6v6BFkaabvZQT70VeTRmAIij50CrOp2459K2SV6imDTNpFu9c1J3UieXFTWcFxcIXhiyqnDOzBFB/h3MQM+2c0zG2FXinhaOQDo3mPUeo961iMWW8rKeeMUzs7pkkVlIzkdRxSxwMksCM9K6ifg4byogLoT3fZO2UOGA1KRdw6HC0LBOYrqAlwsaSoWLdAM8mu5ZNvZCyJjCA30mAp44TBP6UFaKt7qEFsXCd9KE3H8Of/wBqS8Y79R6hr+p9i9dWFNR1y1xCxKbLsJyfXB9qGstR7G6CHutMufi7grgbJTM59hnhf0pHqVn2V0rUhpmo6NdQQAAHU5WITOOufpSvQez9rqGuX0Yuy2lWAMjzoMGReoHscdagoxr0u5tviHFn2jh1DtB32tNFaQPyxlcBVVeQMn/PJp52k163v9q6VqnhiXcXtpsbifLIqs2172P1VJ7dLeXTiikxXMz5DEZ6j+VBJY2X+od5qsY2Xkc2xZFY4xn0pmo+i3Lyx+L3UdPktbtr+6lQMrFGmZgy+fBPNF9t73Tr4Wt1p97DJcRnY6I4LbSM5x7H96H12XRdAj09bvTLy676DvN0UpIHAzkfWgdEu9G1/tNbW9vZywQvG4aGVsMWAJz+35ULV2GpVrY87Fa5Y2On3CalqEMMjS5RZX5xigNG1+3uDbQaiyQQg7mkL7VyD0/au7zs5BBr1vbSHfZTy+FfMjByM+xFAW3Z2GftBqqTGSDS7JmZ2B5YZ4Gfofyo/j1/ZvyVf4Ou0mu/GXEUWkajiNEZneCUqST6464qstr2q2V/aXK313PFFIDLE0zMrL0ORn0oi3PZPUUnijt5tKcJuhupJCQ3zH8vn6VHoAsbLsVcarqlrLcv8QUZY35K8Yx+dZaqNULLba0wH+lvVdL1Z9PvNKvrWW4ty0c0SSAsUbkZH9kj/qNIew063Pa3SFAAbvnxgY/3b1J2gm7P3di8mm6Tc2t07KRLOxK4zyPqMfnXP9Hlrs7baVhcbZH/APbeqrkeEqcvWAGyivLCEOJCwGGbPhI/D/8AKuLHQA7PvuMpjwK5/Y+VMdOGbIIz7V2hgvqRXeME46VReAsgfTNRslxbxq0WOWB3Ofr/AIVAgAbbKjIfem9vczR4CucelHRywyjF1Cpz5gVvAeim2iVIppkKGSNAUbGdpJHPz9PSuXhYThIELT8eMnLFj6D69aeppdvJDcC3k271Aw3lzR+kaClw9zd3E7JJazQPEARhxkZz+VDbWNiuO01FlZ0/RpZdftdPuGmtbiaVUcsPEoI6kHrxXd9p/wABqeoW9o7pLaybd6jAlHrjnHy6GvUbiK0fUby7KwmcarbbJeN2wJDnB9PvfrVM1m1EmuapJGQQ8oPHORSY8kpy6PnxxhFUA6VqA0jVe9RAE8LFQOBlQSB+dXy47R6Te2sfe4BBzgjOKp13p2Z2O3yT/sFCtZOpIAIouKfoyk48OmnWZtka5Y+QogvHZxlAB3h64rLW3TTrU3M/LNyopR37TXDSFgcnpR1Kv+RIivbMyuZG5JqCLvYONu5fQ01dsrkih32ONp4FHUT5mxfJaxX8ipbw/wC0HPhHt1NB3FpaWKk3OLuXH3UJ7tT/AGiOWPsPzFOFsy1ned2xw8kKsR/BiQkfXA/Khri3kiMMMsYHfIrRJkZIJIB6+ZFLRvkYgnvnl2tMEKKNkcanaIx6Ko4A+VFWlxKtqxMDzWSHDpIMrGT5hhyh9xx6g0Ve9m7+KSYHT7lDbyIkypHuKlug46k+WPPHqMu10rRbfV73RdO1K9tNWt179769XEEcaqGkjZVYA8HOSPUZoOaRtHIrItVuhvsZS/pA5G/6eTf54rmOKPADDkHn2ruR4rnTPj44Y7efvu7lSE4Rm27g6j8PQ9OORipdSlDXbEEAyRozH3KjJqiZJDt3iTsdbTShig1CTIHutI9OaG8vYre6na3illwZgP6vPn1HSiLi6+I7Ipb95tSO9Ytjkcrx+eKF0zT1nQNK4wfw0qj6M2eoaYnbOx1aOwlMeq6OWUNczqM9z5nI6kD1zn60Po0mlL2i7R6FYvFbw3ibbdkwFL7fEqkehJpBBFO1kttDeXIj81704xUMmg7RmIlcHIx5H2qbxhjOkF2XYe9VrptbA0+0giLNcEqd7DIGB6ck/l61ArFf6J9Qdd7KLvAJ4JG7rj1qC4a+WH4e+Z7u2bgxTOSBjzBzwflQbWBniaPTZpJEPia0dvGP7oHD/QZ9vOjq36B0/D0PXrrtZDHpo7OJui+GHeZVWG7Ax19s0l0efV3/AKQtKbtFBtupYpSjAKPAEYfh96pLvdnwi9uRjggTOMfTNQSfELKsrXMxkUEK5kJZR7HNb4wbTPSexmrLqWpXej3U4eay1CeeyL/e2iRgV+ma603Wlm7R9ptCvm+He6d0tnZsKx54+fOa8xhtLji6eVraHJIuWYgsfPaB4mPy+pFdPfhFKQK75bLT3DZkc/n4fkMn3ND4kNuy96b2SvO6ml10jTrS1j3G43BgWHp7f+KedgviZexcp00ESi7bblBkjC54PGa8uh1BrmaFbq4u2RW/q2kLIfpVnmvYE0xvhJmj8WCisVP6VpQbGjNI77bN2me0ZtcgJ0+CdWQhEHJ8I6YP4qg7Cxj/AFo06UDaXkbb7eBqrN4X+L2SX1xJCcHEsrEZ+RNXDsioXtBpz5wkO93J9Ajc0zjURE/yE+kQSvE0caqfs9oLe/HHvU8tlLCcSoV98VFbyfYQ+EKVQLx58df1pjbahNF5719G5pkwMEih9qMhh6cUbHJY3J+0QxOfNelFx6fkZhdZB7HFZsyQLBFwyMhZXG0gHB9QRTCKxfAeNxKq+owwruCIqcOhGKbWioCCOtTcqDopegcdgs4xJbIfdV5ohNARBtPhHoBT+zaJDkgZouZ4GTjFTeR/orH+PH2TsqVxp8qEsy54H7YoGS3VT4hg1bJWSll1HG75wKZSYZRR5Vf61M7CNzlFrcIjlQSRHaxpbf27yX3cxjJJ60S0EtsihuMdK6DnDhO6+F+feirW1W5B2SDd/CaVl22L3o5PSp4m2uGRuRWAOY7d7W2mVxtLyxDB91kH86d6LapPeQyyQ2cirpyqi3AHMu5ym3Pviq9b3El3azxEmSQNG6KOpC7849cbh9MnyoptWW3ihPxMdtcwD7J51zE4zkAn8JBJ5xj1xUppsrFpBmg3Wv6je31rr1vNdWccJlKXYMKi4VgY1RuOcjy8v15e7klt0sE1LTxrl/ZFYFMW97hXye7kkYZ4HA9cVSNe17XrtX07WLlmHxXxgV/EyNjA2N/DjnA45NMYe2CCSz1O+0e3vtdtGwLuQGNO5wQFAUjxDPDFTipvHL0sskRSbWS20ia0kA72DUxC205GQjg4PmM1Dq8LpdgekUY/6RRWn2cvdiKNO8lkO9YY+i+nB9AfOmN1ALi+IUhwiqhI5ztAHXzFXicz9Eemzdx3kMy5glxkfwsOjfSm+jafPJxDtMIP9cxwij3PkfamFhokN1fQwlS6PnKA4LYUkDPlnGM010LSJNZle3e8FqYHWNI1t9yITu4ADADp75zWlJJBSsIs7axs2aK5meRgOZUUFB/OskM9kwWdD3bcq+MqwPTmmFt2cbbPJ8fxABuHcYzk44O/H6fWirm3bTILX7b4uzuSUaGSLGweZHJ/LpU90U0YqXuJxhgF3Vq97ORzgPE2TjNSXNj8PeOLc5gwrpznAIBx+tNbGGRtkqnJ/hFHYVIp95YS7iL+3a4I6Tqdsg+Z/F9fzpe8VtBzbWsksvkbrGE/5R1Pz/WvSmUEAXCZAPShLrQre5XcnD7vu1lNGcGeX3ccs8jS3EjSSEAZbnA9PYewoKS2q/X/AGclhcjb0pFd6cyE70qiaJ00VcxtG4dScryKIS7aR+U8RHQDk+9NJ9NES77pjGDyqgZkYewPAHu30BoQtI5EduBbR+ivy395+p/QegFMAVk9/MO8QujcAqc4p3b6u+l6dLb2k/fTTKYyD/uoz1GfMnilk8wkkKXOSSdvfxjxf8wPDj54P9qoZbRkUPHtkiJwsifdz7+an2Ioeh8GUOrE+G4j2nPJpnb3EUoyjgj0qrZPrkZ8/KpI32OCjEGiYuSNg0Zb3LRHw5Hyqp22pTRECTMg9CMU1t9Silxztb0oUYtlrqp4Eg3Cm0MqyL3iI6DzPlVMSYDkHNPNJ7SSWsBtpYklhPQVOcWPGX2P0uXTo275V0b33qsi++0Lp4F3dK7a8ZzS6Dbj9rvNQPcc0lN01FWl7bsSJeora0bY80guCXEinLCmr3SzxKzDoaTpBsXMdFWWcsjHwmrkRq91BMuAvjA4oTb8NGzP581Ctu8cm8noam1G8jmgK4CsOPnWMat5e9dRH97yPTb70HrOsC6f4a7Qsq8GZMbvr/F/nmu0mis9LeUt9r5etVkuXdmc5ycmgMg/4RgmYU+JhzgPbgnb7MvVfrx86MSy2KJr93jCDCxAZkx8vw/X8qV27P3q93I6OeNysQQKsUEUPw3c7h3jcnJ5NYxNa3Dz2/d26rDAfvIjZZv7zdT+1NbAQSIFBCuPLzoOxhjtolUgAnjmpe7AlOw4bPlQBY+0odzq1u7Ix27idoyT4TVk/o7AN1q7FMbnjPT3f9aqlhcyQvHIcF0PH9ryIz5cedPLXLPLNol7JZzSndLbsBhyM8jrjqeBxz5cCpZE2qLY2k7LacLoT8Andg/+uhO16hktV2jd3hwfSq/Z6jfyBYTdTOrEgxEDPr6UTeRz3mx726kbZ91ON3/j5morG0yryJommiaTUJgqBvAnh6H7o6etFWNmsuWVtrr5HgigoJd82Z07tsgKw6qAMDmnMMnebTcAuB0lU+IfP1ot0BJM2LRtrLKu4E9axrIHxJ1o+Fzt6iRPIr1+tdsyyfdQ/tSbFdRLKssKusg3Bhzmll9BavPHtjAYKScjzHQ1Y7j7NW8Pe56Z6CkOoGMzAoMZRs/PFUjIjNUVe/0SMRvKHwD/ABHr/n1pJ2h0G60dUN33JEoOzupNx4q62tjBqekahJcSTK0AYqUkUchcjr/PirIGLara/aPzbtxui55Ht+3FF5a8AsVnnnaCKI/0U6WyLGZD3I3BUyefUcn9/XzqiWCEX8cRyEmOx1z95Txg17BrmnSat2WtbKGXEk1wNvetEBkEnnaPbyrz+XQ7jTdeitp+7Z0kUkocjmmxSFyxaKrFGzlFJ+9jk/KiU7tI2dXESligkZdzsfPA8h7/ACqa3hIuIVZfIf8AbUK7RG0U0HeoGZlKvsYE8EZweOBxjy4xV2RiY8skUrQ3P2wH4s598g9ax2CMu0koy7lLdcZIP6imN3YRahYNqWmeGSJVF5aMcmPAADp5lD79DSuUeG39ovL++1BOwtUEw3bxYKuT7Uwt9WB/rRj3pL0reaYBb7e7jl+41Hpl/Eg6VRI5pI/uMRVk0PXDEVNwA6dGFK0YdXssZt/B4ZVGTSM3u7Knhgec0y1e4twRc27gow5XPSq1qjwysskbFWPUCskZ9BgWjJB6VIpKpvHrRklqG+VRrasikAZBpgEm8vDu9qUXWPExJ60zkDKuAKAuLNpvxkCsFCK8ujN4ckKPLNRK31p0mhwqcu+fnRMdrY2/4QTQobZIF02ydojNsOT0zR9pbRWhlur+bAVdxxycewoS81wQAxQr0pUtzNdySox3u8ZCqfPJFazVZdY4L49p00rUI4tLdY+8/wBrYHcuMjJGRzg8UT3kUzO0RCleoXkYzjIP5Vz2Nmg0mI3c6NeXMdvI08V/J4VI4UR5zzjAruKUXNo0iTO8XcgojRBBCxfcY1x1A55qabsaSjXA62lXHdy4x5NRyF4uRyo6Y6iq5FdpkB+R6+lN7a6VQFDBlNM0ImPYbt5QCrgSgcSFRvH1qeFgjA9G8z/F86UAg4aM0VDc44akodMeApMMMNrVtJpLQ8eJPOl0dwcjPI8vaiBc8bW5HrS0NYzjvFdd0B2n06GsfUlY4nZgfrSWTwuHibb60PdyORknxeooaWNvRZjdui74GWRfTNKdTvUa4D92VGCGFVz/AElLbP4WK+4rqXVHunDSHkDAxTKFCSnaDTd3NlaXC2lwndTHD4QHqMc55HHkf1qKHXdW+Kjd7uPcq7QRCvQ/T2oG4bu1EkLMknnjz9j6iuY0jmG6VTE/8S5Kn6dRTaRE3Y6bVdQVIglyjLE25QI16/P6mgroSTXxvLqQNcHkIV2knHHHkOnzriBu6O2FWAP+8b7309KnW13eJSSTzz1oJJMLk2I5tPGfEmGH4h+9Ay6ZHM2H8Lf8RR+4q1skijDjK/Ko5LeMoSowafYXVopU1lHaSZjbvXx15C//AG+XAoKWJ3cs53H9h6VaLmzJYkigpLPHlRVAdiHufatNF7U2a3x5VBJD7UwBWy4rSO8ZG00Y8XtQ7pisY6+NO3DZPtQssgLZGTXTLUTDmsEfb2x1raSPnGaysoANzMcUovJ5IydjY5rdZRChNdX1x/xDUSzyMpJY9K1WUpRogyScnk050CCN2DuuW4wT5c1qsoBl/Uc6heOtuQ8ccmw4XeDx+R5+vFH2Lu9kzsxLBBzWVlFekhNK7AsAeD1onRrmX4gpuO3I4rVZTGLjbscdaLJwAayspAolSRh0PWpo3YNjPBrKylHO9xyV8s0O7EGsrKwGLrtQyvnypYrFZFwfOsrKdeCfsYv4o1JonTjuBU9KysoBQ2ijX0qYIFIxxWVlIyiCokWQYYZoe7hREO0VuspUFiqeJMdKAmjXnisrKoibF8sa5PFD3EahRgVlZTiC5wKEmArKyiYGaoW61lZWCf/Z",
      title:"Data Science",
      desc:"Learn to analyze data",
    },
  ]

  return (
    
    <>
      <Navigation />
      <section className="">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4" style={{justifyContent: 'space-evenly'}}>
          {
          cardData.map((data) => (
            <>
              <div className="col">
                <div className="card h-100" style={{boxShadow: '1px 2px'}}>
                  <img src={data.img} className='card-img-top' alt="..." />
                  <div className="card-body text-center">
                  <p class="card-text text-center">{data.desc}</p>
                  </div>
                </div>
              </div>
            </>
          ))
        }
          </div>
        </div>
      </section>
    </>
  )
}

export default Datascience