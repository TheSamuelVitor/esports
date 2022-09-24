import { ImageBackground, View } from 'react-native';
import { Styles } from './styles';

interface Props {
  children: React.ReactNode
}

export function Background({
  
}) {
  return (
    <ImageBackground style={Styles.container} >

    </ImageBackground>
  );
}