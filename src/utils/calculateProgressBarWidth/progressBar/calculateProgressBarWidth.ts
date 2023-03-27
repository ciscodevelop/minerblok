const CalculateProgressBarWidth = (FixedWidth: number,value: number, maxValue: number): number => {
    const fixedWidth = FixedWidth;
    const percentValue = (value / maxValue) * 100;

    // Calcola la larghezza della progress bar in base alla percentuale
    const progressBarWidth = (percentValue / 100) * fixedWidth;
  
    // Restituisce la larghezza calcolata se è minore o uguale alla larghezza fissa, altrimenti restituisce la larghezza fissa
    return progressBarWidth <= fixedWidth ? progressBarWidth : fixedWidth;
    
}
export default CalculateProgressBarWidth;