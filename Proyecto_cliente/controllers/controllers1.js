const inputFields = document.querySelectorAll('.IMPUTSCAR');
const savedDataContainers = document.querySelectorAll('.saved-data');
const playButton = document.getElementById('PlaySavedData');
const savedDataArray = [];

playButton.addEventListener('click', () => {
  const currentDate = new Date().toLocaleString();
  
  inputFields.forEach((input, index) => {
    const inputData = input.value;
    savedDataArray.push({ data: inputData, timestamp: currentDate });
    const savedDataContainer = savedDataContainers[index];
    savedDataContainer.textContent = `Guardado: ${inputData} (${currentDate})`;
    input.value = '';
  });
});
