import React, { useEffect, useState } from "react"
import Showcase from "../components/showcase"
import LatestMobiles from "../components/latestMobiles"
import MobileSection from "../components/mobileSection"
import FeaturedPost from "../components/featuredPost"
import Layout from "../components/layout"
import apiData from "../assets/data"

const IndexPage = () => {
  let ranges = [80000, 50000, 40000, 30000, 20000, 10000]
  let [sections, setSections] = useState([])

  useEffect(() => {
    let arr = []
    for (let i = 0; i < ranges.length; i++) {
      let obj = {
        range: ranges[i],
        title: `Mobile Phone Price below ${ranges[i].toLocaleString("PKR", {
          style: "currency",
          currency: "PKR",
        })} `,
      }
      obj.data = apiData.filter(
        item => item.price < ranges[i] && item.price > (ranges[i + 1] || 0)
      )
      arr.push(obj)
    }
    setSections(arr)
  }, [apiData])
  return (
    <Layout>
      <Showcase />
      <LatestMobiles />
      {sections.map(section => {
        return (
          <MobileSection
            title={section.title}
            range={section.range}
            data={section.data}
          />
        )
      })}
      <FeaturedPost />
    </Layout>
  )
}
export default IndexPage
