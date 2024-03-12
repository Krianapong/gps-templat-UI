import React from "react";
import { IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import data from "../../model/data";

const Grouping = () => {
  const handleEdit = (id) => {
    console.log("Edit clicked for item with ID:", id);
  };

  const handleDelete = (id) => {
    console.log("Delete clicked for item with ID:", id);
  };

  return (
    <div className="w-full">
      {/* <h1 className="text-2xl font-bold mb-4 ">Device Management</h1> */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 mx-auto" style={{ maxWidth: 'calc(100vw - 56px)' }}>
          <thead className="bg-[#263242] text-white">
            <tr>
              <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
                #
              </th>
              <th className="py-3 text-center text-xs font-medium uppercase tracking-wider">
                Group name
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
                Sort
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
                Remark
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-[#263242] text-white divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr key={index} className="text-xs">
                <td className="px-6 py-2 whitespace-normal text-center">
                  {index + 1}
                </td>
                <td className="px-6 py-2 whitespace-normal text-center">
                  {item.groupName}
                </td>
                <td className="px-6 py-2 whitespace-normal text-center">
                  {item.sort}
                </td>
                <td className="px-6 py-2 whitespace-normal text-center">
                  {item.remark}
                </td>
                <td className="px-6 py-2 whitespace-normal text-center">
                  <IconButton
                    size="small"
                    color="primary"
                    onClick={() => handleEdit(item.id)}
                    style={{
                      border: "2px solid #3E5CFE",
                      borderRadius: "4px",
                      padding: "4px",
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    size="small"
                    color="error"
                    onClick={() => handleDelete(item.id)}
                    style={{
                      border: "2px solid #F41127",
                      borderRadius: "4px",
                      padding: "4px",
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Grouping;
