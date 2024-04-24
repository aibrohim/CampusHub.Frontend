import { Spin, Typography } from "antd";

import { GroupCard, useGetGroupsQuery } from "@/entities/Group";
import { AddGroup } from "@/features/AddGroup";
import { useParams } from "react-router-dom";

export const Groups = () => {
  const { id: courseId } = useParams() as { id: string };

  const { data: groups, isFetching } = useGetGroupsQuery(courseId);

  return (
    <>
      <Typography.Title>Groups</Typography.Title>

      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-4">
          <AddGroup courseId={courseId} />
        </div>
        {isFetching && <Spin />}
        {groups &&
          groups.map((group) => (
            <div key={group.id} className="col-span-4">
              <GroupCard group={group} />
            </div>
          ))}
      </div>
    </>
  );
};
