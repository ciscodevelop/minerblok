import "./dataGridCards.scss";
import { DataGrid as DG, GridColDef,} from "@mui/x-data-grid";
import GetColorRarity from "../../features/getColorRarity/GetColorRarity";
import Button from "../button/Button";
import CalculateProgressBarWidth from "../../utils/calculateProgressBarWidth/progressBar/calculateProgressBarWidth";
import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateState } from "../../api/userApi";


const DataGrid = ({ data  }: any) => { 
  const [cards, setCards] = useState<any[]>([])   
  
  const queryCliente=useQueryClient({})
  const updateStatecard = useMutation({
    mutationFn: updateState,
    onSuccess: () => {
      queryCliente.invalidateQueries(['queryGetCardsUser'])
      
    }
  })

  useEffect(() => {
    data && setCards(data)
  }, [data])    
  
  const handleActive = (id:any) => {
    // setCards(cards.map((card: any) => {
    //   if (card.id === id) {        
    //     console.log(card.id);        


    //     return {...card, isActive: true}
    //   } else {
    //     return card
    //    }
   // })) 
   
   updateStatecard.mutate(id)
   
  }
  
  
  const handleDisactive = (id:any) => {  
    // setCards(cards.map((card: any) => {
    //   if (card.id === id) {        
    //     console.log(card.id);        
    //     return {...card, isActive: false}
    //   } else {
    //     return card
    //    }
    // }))   
    updateStatecard.mutate(id)
    
    
    
    
    
    
  }
  
  const columns: GridColDef[] = [
    {
      field: "img",
      headerName: "Cards",
      headerAlign: "center",
      width: 130,
      align: "left",
      renderCell(params) {
        return (
          <div
            className="cards-container"
            style={{ backgroundColor: GetColorRarity(params.row.rarity) }}
          >
            <img src={params.row.img} style={{ width: 50 }} alt="" />
          </div>
        );
      },
    },
    {
      field: "name",
      headerName: "Name",
      width: 120,
      headerAlign: "center",
      align: "left",
    },
    {
      field: "mh",
      headerName: "MH/s",
      type: "number",
      width: 90,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "status",
      headerName: "Status",
      headerAlign: "center",
      align: "left",
      width: 160,
      renderCell(params) {
        return (
          <>
            <div className="progress-status">
              <div
                className="progress-bar-status"
                style={{
                  width: CalculateProgressBarWidth(
                    150,
                    params.row.currentStatus,
                    params.row.status
                  ),
                }}
              ></div>
              <span className="progress-text">
                {params.row.currentStatus} / {params.row.status}
              </span>
            </div>
          </>
        );
      },
    },
    {
      field: "active",
      headerName: "Active",
      align: "center",
      width: 120,
      headerAlign: "center",
      sortable: true,
      sortingOrder: ['asc', "desc"],
      renderCell(params) {
        return (
          <div
            className={
              params.row.isCooling ? "blink-circle isCooling":
              (params.row.isActive
                ? "blink-circle active"
                : "blink-circle notActive")
            }
          ></div>
        );
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      headerAlign: "center",
      align: "center",
      width: 160,
      renderCell(params) {
        if (params.row.isActive === true) {
          return (
            <Button
              title={"Stop"}
              iconName={"StopOutlined"}
              styleIcon={{color:'white'}}
              styleBtn={{
                borderRadius: 5,
                padding: 15,
                backgroundColor: "lightgreen",
                width: 100,
              }}
              onClick={()=>handleDisactive(params.row.id)}
            ></Button>
          );
        } else if(params.row.isActive === false&&params.row.isCooling===false) {
          return (
            <Button
              title={"Acvtive"}
              styleIcon={{color:'white'}}
              iconName={"PlayArrowOutlined"}
              styleBtn={{ borderRadius: 5, padding: 15, width: 100, backgroundColor: 'lightblue' }}
              onClick={()=>handleActive(params.row.id)}
            ></Button>
          );
        }
          else if(params.row.isCooling === true){
          return (
            <Button
              title={"Cooling"}
              styleIcon={{color:'white'}}
              iconName={"CachedOutlined"}
              styleBtn={{ borderRadius: 5, padding: 15, width: 100, backgroundColor: 'orange' }}
              
            ></Button>
          );
        }
      },
    },
  ];
  const getRowClassName = (params: any) => {     
    return "custom-row";
  };
   
  function getRowId(row: any) {  
    console.log(row);
    
    return row.id;
  }
  return (
    <div
      className="datagrid"
      style={{ height: 600, width: "100%", minWidth: 350 }}
    >
      <DG /*sx={ {bgcolor: "lightblue",p:1}} */
        className="DG"
        rows={cards}
        getRowId={getRowId}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
        //sortModel={[{ field: "active", sort: "desc" }]}
        getRowClassName={getRowClassName}
      /> 
    </div>
  );
};

export default DataGrid;
