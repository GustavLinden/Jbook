import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators} from 'redux';
import { actionCreators } from '../state';

export const useActions = () => {
  const dispatch = useDispatch();
  return useMemo(() => {
  return bindActionCreators(actionCreators, dispatch);
  }, [dispatch]);
};

//Värdet i en "DependencyArray" behöver abra sättas in IFALL den deklareras i funktionen , dispatch i den här filen, eller om den kommer som props. 
// Importerade värden behövs inte sättas in