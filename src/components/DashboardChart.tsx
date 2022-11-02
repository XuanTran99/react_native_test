import React from 'react';
import {View, Text} from 'react-native-ui-lib';
import {VictoryPie} from 'victory-native';
import colors from '../styles/colors';

interface DashboardProps {
  title?: string;
  data: Array<{
    color: string;
    label: string;
    value: number;
  }>;
}
const DashboardChart: React.FC<DashboardProps> = ({title, data}) => {
  const [convertData, setConvertData]: any = React.useState([]);
  const [colorData, setColorData]: any = React.useState([]);

  //chuyển đổi để render dữ liệu ra bảng chart
  React.useEffect(() => {
    convertDataChart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  async function convertDataChart() {
    let newArr: Array<object> = [];
    let arrColor: any = [];
    await data.forEach(el => {
      newArr.push({
        x: el.value,
        y: el.value,
      });
      arrColor.push(el.color);
    });
    setConvertData(newArr);
    setColorData(arrColor);
  }

  return (
    <View backgroundColor={colors.white} margin-10 br30 centerV>
      <View absT margin-20>
        <Text s18b blue10>
          {title}
        </Text>
      </View>
      <View absR padding-10>
        {data?.map((item, index) => {
          return (
            <View key={'description-chart-item' + index} row centerV>
              <View
                width={15}
                height={15}
                backgroundColor={item.color}
                marginR-10
              />
              <Text>{item.label}</Text>
            </View>
          );
        })}
      </View>
      <VictoryPie
        width={300}
        data={convertData}
        colorScale={colorData}
        innerRadius={30}
        style={{labels: {fill: 'black', fontSize: 18, fontWeight: 'bold'}}}
        // categories={{x: ['dogs', 'cats', 'mice']}}
        animate={{
          duration: 500,
        }}
      />
    </View>
  );
};

DashboardChart.defaultProps = {
  title: 'Tiêu đề bảng',
  data: [
    {color: colors.green, label: 'Dữ liệu 1', value: 1},
    {color: colors.error, label: 'Dữ liệu 2', value: 1},
    {color: colors.placeholder_light, label: 'Dữ liệu 3', value: 6},
    {color: colors.placeholder_light2, label: 'Dữ liệu 4', value: 2},
  ],
};

export default React.memo(DashboardChart);
